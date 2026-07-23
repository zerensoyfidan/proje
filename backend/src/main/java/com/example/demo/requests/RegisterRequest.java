package com.example.demo.requests;

import com.example.demo.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class RegisterRequest{

@NotBlank(message="Ad Soyad alanı boş bırakılamaz")
private String fullName;

@NotBlank(message="E-posta alanı boş bırakılamaz")
@Email(message = "Geçerli bir e-posta adresi giriniz")
private String email;

@NotBlank(message="Şifre alanı boş bırakılamaz")
@Size(min = 6, message = "Şifre en az 6 karakter olmalıdır")
@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).*$",
         message = "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir"
    )
private String password;

@NotNull(message="Kullanıcı rolü seçilmelidir")
@Enumerated(EnumType.STRING)
private Role role;

public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
    
}