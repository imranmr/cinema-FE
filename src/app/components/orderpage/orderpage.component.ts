import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  user:any
  cartitems:any = null;
  cardform:FormGroup;
  public submitted: boolean = false;
  constructor(private data:DataserviceService, private router:Router,private formBuilder: FormBuilder,private userservice:UserService) { 
    this.cardform = this.formBuilder.group({
      cardname:['',[Validators.required,Validators.minLength(2)]],
      cardnumber:['',[Validators.required,Validators.min(1000000000000000),Validators.max(9999999999999999)]],
      expiry:['',[Validators.required]],
      cvv:['',[Validators.required,Validators.minLength(3)]],
      address:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.data.currentuser.subscribe(data => this.user=data);
  }

  onSubmit(loginForm: any){
    if (loginForm.valid){
      this.submitted = true;
      console.log("login form",this.cardform.value);
      let buyform = {
        "userid":this.user.userid,
        "address":this.cardform.value.address
      }
      this.userservice.buycart(buyform).subscribe(
        (res:any)=>{
          console.log("Successfully Bought:",res)
          this.data.updateOrder(res);
          this.router.navigate(["confirmationpage"]);
        },(error:any)=>{
          console.log(error);
        }
      )
      console.log("buyform",buyform);
      
    }else{
      console.log("invalid form");
      this.validateForm(loginForm);
    }
  }
  public validateForm(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }else{
        this.validateForm(control);
      }
      
    })
  }
  hasError(field:any){
    return (this.cardform.get(field)?.invalid&& this.cardform.get(field)?.touched&&this.cardform.get(field)?.errors);
  }
  get f(){
    return this.cardform.controls;
  }


  goback(){
    console.log("Clicked Go back")
    this.router.navigate(["mycart"])
  }

  confirmbuy(){
    console.log("Clicked Confirm Buy")

  }

}
