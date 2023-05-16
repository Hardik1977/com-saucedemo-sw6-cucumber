package com.saucedemo.sw6.cucumber.pages;

import com.saucedemo.sw6.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class InventoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(InventoryPage.class);

    public InventoryPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(className = "title")
    WebElement productsText;

    public String getProductText(){
        return getTextFromElement(productsText);
    }

    public int findActualNumberOfProducts(){
        List<WebElement> productList=findElementsFromWebPage(By.xpath("//img[starts-with(@class,'inventory_item_img')]"));
        return productList.size();
    }

}
