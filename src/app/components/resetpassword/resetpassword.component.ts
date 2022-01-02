import { DataserviceService } from 'src/app/services/dataservice.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  passwordForm: FormGroup;
  user:any;
  passwordnotequal:boolean = false;
  submitted:boolean = false;
  
  constructor(private formBuilder:FormBuilder,private router:Router, private userService:UserService, private data:DataserviceService) {
    this.passwordForm = this.formBuilder.group({
      password1: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(16)]],
      password2: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(16)]]
    })
   }

  ngOnInit(): void {
    this.data.currentuser.subscribe(data=>this.user=data);
  }

  onSubmit(passwordForm: any){
    if (passwordForm.valid){
      this.submitted = true;
      console.log("password",this.passwordForm.value);
      if (this.passwordForm.value.password1 != this.passwordForm.value.password2){
        this.passwordnotequal = true;
      }else{
        this.passwordnotequal=false;
        let resetpass = {
          "userid": this.user.userid,
          "password":this.passwordForm.value.password2
        }
        this.userService.resetpassword(resetpass).subscribe(
          (res:any)=>{
            console.log("resetted password")
            this.data.updateUser(res);
            this.router.navigate(["dashboard"])

          },(error:any)=>{
            console.log(error)
          }
        )
      }
      
    }else{
      console.log("invalid form");
      this.validateForm(passwordForm);
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
      return (this.passwordForm.get(field)?.invalid&& this.passwordForm.get(field)?.touched&&this.passwordForm.get(field)?.errors);
    }
    get f(){
      return this.passwordForm.controls;
    }
}


