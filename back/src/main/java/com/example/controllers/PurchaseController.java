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

import static com.example.controllers.AuthController.*;

@RestController
@RequestMapping("/purchase")
@CrossOrigin("http://localhost:4200")
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
    @GetMapping("/list/user")
    public List<Purchase> getAllPurchases(HttpSession session) throws NotLoginException, NotACustomerException{
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(!isCustomer(u))return ps.getAllPurchases();
        return ps.getAllPurchasesByUser(u.getUser_id());
    }

    @PostMapping("/create")
    @ResponseBody
    public Purchase create(@RequestBody Purchase p, HttpSession session) throws NotACustomerException, NotLoginException{
        p.setPurchase_id(0);
        User u = isLogin(session);
        if(u==null)throw new NotLoginException();
        if(!isCustomer(u))throw new NotACustomerException();
        p.setBuyer(u);
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
