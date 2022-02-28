package com.example.controllers;

import java.util.List;

import com.example.modules.Product;
import com.example.modules.User;
import com.example.services.ProductService;
import com.example.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

    private ProductService ps;

    public ProductController(){}

    @Autowired
    public ProductController(ProductService ps){
        this.ps = ps;
    }

    @PostMapping("/create")
    @ResponseBody
    public Product create(@RequestBody Product p){
        return ps.create(p);
    }
    
    @PutMapping("/deactivate")
    public Product deactivate(@RequestBody Product p){
        return ps.deactivate(p.getProduct_id());
    }
    
    @PutMapping("/activate")
    public Product activate(@RequestBody Product p){
        return ps.activate(p.getProduct_id());
    }

    @GetMapping("/")
    public List<Product> getAllProducts(){
        return ps.getAllProducts();
    }

    @GetMapping("/list/{name}")
    public List<Product> getLikeName(@PathVariable("name")String name){
        return ps.getLikeName(name);
    }
    

}
