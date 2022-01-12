import { DataserviceService } from 'src/app/services/dataservice.service';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public submitted: boolean = false;
  usersub: Subscription = new Subscription;
  user: any;
  userid:any;
  public emailpassworderror: boolean = false;

  constructor(private formBuilder: FormBuilder, private router:Router, private authservice:AuthService, private data:DataserviceService, private userservice:UserService) {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
    })
   }
  
  ngOnInit(): void {
    console.log("Userid:",localStorage.getItem('userid'));
    if (localStorage.getItem('userid') !=null){
      this.userid = localStorage.getItem('userid');
      let data = {
        "userid":this.userid
      }
      this.userservice.getlatestuserdetail(data).subscribe(
        (res:any)=>{
          this.data.updateUser(res);
          localStorage.setItem('isLoggedIn',"true");
          this.router.navigate(['dashboard']);
        }
      )
    }

    
  }

  onSubmit(loginForm: any){
    if (loginForm.valid){
      this.submitted = true;
      console.log("login form",this.loginForm.value);

      this.usersub = this.authservice.login(this.loginForm.value).subscribe(
        (res:any)=> {
          //store login data to dataservice
          //use dataservice to control displays
          //update dataservice
          this.user = res;
          this.data.updateUser(this.user);
          localStorage.setItem('isLoggedIn',"true");
          localStorage.setItem('userid',this.user.userid);
          console.log(this.user.userid);
          this.router.navigate(["/dashboard"])

        }, (error:any)=> {
          this.emailpassworderror = true;
          console.log(error);
        }
      );
      
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
    return (this.loginForm.get(field)?.invalid&& this.loginForm.get(field)?.touched&&this.loginForm.get(field)?.errors);
  }
  get f(){
    return this.loginForm.controls;
  }

}
