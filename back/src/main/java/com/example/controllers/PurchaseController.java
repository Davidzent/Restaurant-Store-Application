package com.example.controllers;

import java.util.List;

import com.example.modules.Purchase;
import com.example.services.PurchaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
