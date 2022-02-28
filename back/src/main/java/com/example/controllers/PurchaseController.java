package com.example.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.example.exeptions.NotACustomerException;
import com.example.exeptions.NotASellerException;
import com.example.exeptions.NotLoginException;
import com.example.modules.Purchase;
import com.example.modules.User;
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
    public Purchase create(@RequestBody Purchase p, HttpSession session) throws NotACustomerException, NotLoginException{
        p.setPurchase_id(0);
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(!isCustomer(u))throw new NotACustomerException();
        return ps.create(p);
    }

    @PutMapping("/cancel")
    @ResponseBody
    public Purchase cancel(@RequestBody Purchase p, HttpSession session) throws NotASellerException, NotLoginException{
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(isCustomer(u))throw new NotASellerException();
        return ps.cancel(p.getPurchase_id());
    }
    @PutMapping("/confirm")
    @ResponseBody
    public Purchase confirm(@RequestBody Purchase p, HttpSession session) throws NotASellerException, NotLoginException{
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(isCustomer(u))throw new NotASellerException();
        return ps.confirm(p.getPurchase_id());
    }
    @PutMapping("/delivery")
    @ResponseBody
    public Purchase delivery(@RequestBody Purchase p, HttpSession session) throws NotASellerException, NotLoginException{
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(isCustomer(u))throw new NotASellerException();
        return ps.delivery(p.getPurchase_id());
    }
    

}
