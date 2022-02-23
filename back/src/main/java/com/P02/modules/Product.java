package com.P02.modules;

public class Product {
    int product_id;
    double price;
    String description;
    User seller;
    int statusid;
    int typeid;

    public Product(int product_id, double price, String description, int statusid, int typeid) {
        this.product_id = product_id;
        this.price = price;
        this.description = description;
        this.statusid = statusid;
        this.typeid = typeid;
    }

    public Product(int product_id, double price, String description, User seller, int statusid, int typeid) {
        this.product_id = product_id;
        this.price = price;
        this.description = description;
        this.seller = seller;
        this.statusid = statusid;
        this.typeid = typeid;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getSeller() {
        return seller;
    }

    public void setSeller(User seller) {
        this.seller = seller;
    }

    public int getStatusid() {
        return statusid;
    }

    public void setStatusid(int statusid) {
        this.statusid = statusid;
    }

    public int getTypeid() {
        return typeid;
    }

    public void setTypeid(int typeid) {
        this.typeid = typeid;
    }

    @Override
    public String toString() {
        return "Product [description=" + description + ", price=" + price + ", product_id=" + product_id + ", seller="
                + seller + ", statusid=" + statusid + ", typeid=" + typeid + "]";
    }
    
    

}
