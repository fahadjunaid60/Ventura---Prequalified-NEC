import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-nec-claim-application',
  templateUrl: './nec-claim-application.component.html',
  styleUrls: ['./nec-claim-application.component.css']
})
export class NecClaimApplicationComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
      this.phoneCodeAPI();
  }

  ngOnInit(): void {
  }
  phoneCodeAPI(){
   
    this.httpClient.get(`/assets/phone.json`)
    .subscribe((data) => {
      $.each(data,function(i,v){
        $('#international_PhoneNumber_countrycodeval').append(`<option value="${v}">${i}</option>`);
      })
     
    })
  
  }
  nextSlide(){
    var proceed = true;
    console.log($('.slide-form .slide-item.active').find('input').val())
    if($('.slide-form .slide-item.active').find('input').val() == ""){
      proceed = false;
    }
    if($('.slide-form .slide-item.active').find('select').val() == ""){
      proceed = false;
    }
    if(proceed){
      if($('.slide-form .slide-item.active').next().is(':last-child')){
        $('.submit-btn').show();
        $('.next-btn').hide();
      }
   
      $('.slide-form .slide-item.active').removeClass('active').next().addClass('active');
    }
  }
}
