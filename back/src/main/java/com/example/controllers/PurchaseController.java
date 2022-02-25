package com.example.controllers;

import java.util.List;

import com.example.modules.Purchase;
import com.example.services.PurchaseService;

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
@RequestMapping("/purchase")
@CrossOrigin("*")
public class PurchaseController {
    
    private PurchaseService ps;

    public PurchaseController(){}

    @Autowired
    public PurchaseController(PurchaseService ps){
        this.ps = ps;
    }

    @GetMapping("/")
    public List<Purchase> getAllPurchases(){
        return ps.getAllPurchases();
    }
    @GetMapping("/list/{id}")
    public List<Purchase> getAllPurchases(@PathVariable("id")int id){
        return ps.getAllPurchasesByUser(id);
    }

    @PostMapping("/create")
    @ResponseBody
    public Purchase create(@RequestBody Purchase p){
        p.setPurchase_id(0);
        return ps.create(p);
    }

    @PutMapping("/cancel")
    @ResponseBody
    public Purchase cancel(@RequestBody Purchase p){
        return ps.cancel(p.getPurchase_id());
    }
    @PutMapping("/confirm")
    @ResponseBody
    public Purchase confirm(@RequestBody Purchase p){
        return ps.confirm(p.getPurchase_id());
    }
    @PutMapping("/delivery")
    @ResponseBody
    public Purchase delivery(@RequestBody Purchase p){
        return ps.delivery(p.getPurchase_id());
    }
    

}
