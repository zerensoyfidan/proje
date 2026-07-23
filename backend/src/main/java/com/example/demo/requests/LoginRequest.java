package com.example.demo.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginRequest{

@NotBlank(message="Boş bırakılamaz")
@Email(message="Geçerli bi e-posta adresi giriniz")
private String email;

@NotBlank(message="Boş Bırakılamaz")
private String password;


public String getEmail(){
    return email;
}

public void setEmail(String email){
  this.email=email;
}

public String getPassword(){
    return password;
}

public void setPassword(String password){
    this.password=password;
}
}
