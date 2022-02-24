package com.example.controllers;

import java.util.List;

import com.example.modules.Product;
import com.example.modules.User;
import com.example.services.ProductService;
import com.example.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    private ProductService ps;
    private UserService us;    

    public ProductController(){}

    @Autowired
    public ProductController(ProductService ps,UserService us){
        this.ps = ps;
        this.us = us;
    }

    @PostMapping("/create")
    @ResponseBody
    public Product create(@RequestBody Product p){
        p.setProduct_id(0);
        return ps.create(p);
    }
    
    @PutMapping("/cancel")
    public Product cancel(@RequestBody Product p){
        return ps.cancel(p.getProduct_id());
    }
    
    @PutMapping("/activate")
    public Product activate(@RequestBody Product p){
        return ps.activate(p.getProduct_id());
    }

    @GetMapping("/")
    public List<Product> getAllProducts(){
        return ps.getAllProducts();
    }

}
