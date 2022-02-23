package com.P02.modules;

import java.sql.Timestamp;

public class Purchase {
    int purchase_id;
    Product product;
    User buyer;
    String address;
    Timestamp purchase;
    Timestamp delivery;
    int statusid;

    public Purchase(int purchase_id, Product product, User buyer, String address, Timestamp purchase,
            Timestamp delivery, int statusid) {
        this.purchase_id = purchase_id;
        this.product = product;
        this.buyer = buyer;
        this.address = address;
        this.purchase = purchase;
        this.delivery = delivery;
        this.statusid = statusid;
    }

    public Purchase(int purchase_id, String address, Timestamp purchase, Timestamp delivery, int statusid) {
        this.purchase_id = purchase_id;
        this.address = address;
        this.purchase = purchase;
        this.delivery = delivery;
        this.statusid = statusid;
    }

    public int getPurchase_id() {
        return purchase_id;
    }

    public void setPurchase_id(int purchase_id) {
        this.purchase_id = purchase_id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getBuyer() {
        return buyer;
    }

    public void setBuyer(User buyer) {
        this.buyer = buyer;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Timestamp getPurchase() {
        return purchase;
    }

    public void setPurchase(Timestamp purchase) {
        this.purchase = purchase;
    }

    public Timestamp getDelivery() {
        return delivery;
    }

    public void setDelivery(Timestamp delivery) {
        this.delivery = delivery;
    }

    public int getStatusid() {
        return statusid;
    }

    public void setStatusid(int statusid) {
        this.statusid = statusid;
    }

    @Override
    public String toString() {
        return "Purchase [address=" + address + ", buyer=" + buyer + ", delivery=" + delivery + ", product=" + product
                + ", purchase=" + purchase + ", purchase_id=" + purchase_id + ", statusid=" + statusid + "]";
    }
    
    
    
    

}
