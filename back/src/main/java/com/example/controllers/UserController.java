package com.example.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.example.modules.User;
import com.example.modules.enums.UserRole;
import com.example.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static com.example.controllers.AuthController.*;

@RestController
@RequestMapping(value="/user")
@CrossOrigin("*")
public class UserController {
    private UserService us;    

    public UserController(){}

    @Autowired
    public UserController(UserService us){
        this.us = us;
    }

    @PostMapping("/register/customer")
    @ResponseBody
    public User createCustomer(@RequestBody User p, HttpSession session){
        p.setRoleid(UserRole.Customer);
        User u = us.register(p);
        setSession(u, session);
        return u;

    }
    @PostMapping("/register/seller")
    @ResponseBody
    public User createSeller(@RequestBody User p, HttpSession session){
        p.setRoleid(UserRole.Seller);
        User u = us.register(p);
        setSession(u, session);
        return u;
    }

    @PostMapping("/login/customer")
    public User LoginCus(@RequestBody User p, HttpSession session){
        p.setRoleid(UserRole.Customer);
        User u = us.Login(p.getUsername(),p.getPassword());
        setSession(u, session);
        return u;
    }

    @PostMapping("/login/seller")
    public User LoginEmp(@RequestBody User p, HttpSession session){
        p.setRoleid(UserRole.Seller);
        User u = us.Login(p.getUsername(),p.getPassword());
        setSession(u, session);
        return u;
    }

    @PostMapping("/logout")
    public void Logout(HttpSession session){
        clearSession(session);
    }

    @GetMapping("/")
    public List<User> getAllUsers(){
        return us.getAllUsers();
    }

    // @GetMapping("/{id}")
    // @ResponseBody
    // User getPersonById(@PathVariable("id")int id){
    //     return us.getPersonById(id);
    // }
}
