import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='hdfc bank';//string interpolation

  email="hdfcinfo@gmail.com";//attribute binding

  stylebind="blue";//style binding

  onSubClick()//event binding
  {
    console.log('Subscribed successfully');
  }

  unsubscribe="";
  onUnSubClick(event:any)//event binding
  {
    console.log(event);
    console.log('unsubsribed successfully');
    this.unsubscribe='unsubscribed';
  }

  fullname="sanjayjagadishveer";//two way binding
  
  public getnotification=true;//ngif

 color="red";//ngswitch

 addpayee=["austin","roy","kapoor","rao","sharma"];//ngfor

customername="sanjay";//component interaction

message="";//component interaction

}
