package com.mockupreactnativeuis;

import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.react.rnspinkit.RNSpinkitPackage;
import com.imagepicker.ImagePickerPackage;
import cn.zjy.actionsheet.rn.ActionSheetPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new VectorIconsPackage(),
      new RNSpinkitPackage(),
      new ImagePickerPackage(),
      new ActionSheetPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
