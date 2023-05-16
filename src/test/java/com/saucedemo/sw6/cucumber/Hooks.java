package com.saucedemo.sw6.cucumber;

import com.cucumber.listener.Reporter;
import com.saucedemo.sw6.cucumber.propertyreader.PropertyReader;
import com.saucedemo.sw6.cucumber.utility.Utility;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.Scenario;
import java.io.IOException;

public class Hooks extends Utility{

    @Before
    public void setUp() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        closeBrowser();

    }

}
