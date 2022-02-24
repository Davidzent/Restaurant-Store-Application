package com.example.controllers;

import java.util.List;

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
    public User createCustomer(@RequestBody User p){
        p.setRoleid(UserRole.Customer);
        return us.register(p);
    }
    @PostMapping("/register/seller")
    @ResponseBody
    public User createSeller(@RequestBody User p){
        p.setRoleid(UserRole.Seller);
        return us.register(p);
    }

    @PostMapping("/login/customer")
    public User LoginCus(@RequestBody User p){
        p.setRoleid(UserRole.Customer);
        return us.Login(p.getUsername(),p.getPassword());
    }

    @PostMapping("/login/seller")
    public User LoginEmp(@RequestBody User p){
        p.setRoleid(UserRole.Seller);
        return us.Login(p.getUsername(),p.getPassword());
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
