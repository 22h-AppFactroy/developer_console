package com.developer_console;
import android.os.Bundle; // here

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // here
import com.google.android.ads.mediationtestsuite.MediationTestSuite;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);

    String appId = "ca-app-pub-8356725717508400~8771533277"; // APP ID FROM ADMOB
    MediationTestSuite.launch(MainActivity.this, appId);



  }
  @Override
  protected String getMainComponentName() {
    return "developer_console";
  }
}
