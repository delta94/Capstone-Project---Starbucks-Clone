import React from "react";
import classes from "./Navigation.module.css";
import { Link, Route } from 'react-router-dom'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import StoreMarker from '../../icons/findAStore.png'
import JoinNow from '../JoinNow/JoinNow'
import SignIn from '../SignIn/SignIn'
import StoreLocator from '../StoreLocator/StoreLocator'


const navigation = (props) => (
  <div>
    <header>
      <nav className={classes.Navigation}>
        <div className={classes.handle}>
          <Logo />
          <NavigationItems />
          <div className={classes.signInSignUpPageWrapper}>
            <div className={classes.signInSignUpPage}>
              <Link to="/store-locator" className={classes.findAStoreLink}>
                <img src={StoreMarker} alt="Store Marker" className={classes.locationMarker} />
                  Find a store</Link>
              <Link to="/account/signin" className={classes.signInLink}>Sign in</Link>
              <Link to="/account/create" className={classes.joinNowLink}>Join now</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <Route path="/account/signin" exact component={SignIn} />
    <Route path="/account/create" exact component={JoinNow} />
    <Route path="/store-locator" exaxt component={StoreLocator}/>
  </div>

);

export default navigation;
