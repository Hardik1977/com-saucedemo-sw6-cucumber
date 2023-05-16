package com.saucedemo.sw6.cucumber.steps;

import com.cucumber.listener.Reporter;
import com.saucedemo.sw6.cucumber.propertyreader.PropertyReader;
import com.saucedemo.sw6.cucumber.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends Utility {


    //Basically its a testbase class
    @Before
    public void setUp(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver,scenario.getName().replace("","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);//reporter from cucomber.listners
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        closeBrowser();

    }

}
