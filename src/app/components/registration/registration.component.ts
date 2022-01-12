import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted:boolean = false;
  user:any;
  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UserService,private data:DataserviceService) { 
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      password2:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      firstname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      lastname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      mobile:['',[Validators.required,Validators.maxLength(10)]]
    })

  }

  ngOnInit(): void {
  }
  onSubmit(loginForm: any){
    if (loginForm.valid && this.registerForm.value.password == this.registerForm.value.password2){
      this.submitted = true;
      console.log(this.registerForm.value);
      let json = this.registerForm.value
      let data ={
        "firstname": json.firstname,
        "lastname":json.lastname,
        "adminrights":0,
        "email":json.email,
        "password":json.password,
        "mobile":json.mobile
      }
      console.log("Data:",data)
      this.userService.createuser(data).subscribe(
        (res:any)=>{
          this.user = res;
          this.data.updateUser(this.user);
          localStorage.setItem('isLoggedIn',"true");
          localStorage.setItem('userid',this.user.userid);
          console.log(this.user.userid);
          this.router.navigate(["/dashboard"])
        },(error:any)=>{
          console.log("Error creating user:",error);
        }
      )
    }

    else{
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
    return (this.registerForm.get(field)?.invalid&& this.registerForm.get(field)?.touched&&this.registerForm.get(field)?.errors);
  }
  get f(){
    return this.registerForm.controls;
  }

}
