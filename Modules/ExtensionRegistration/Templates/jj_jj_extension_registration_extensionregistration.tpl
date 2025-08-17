<main>
  <section id="header-section">
  <h1 class="formHeader">Join Our Community</h1>
</section>

    <div class="registration-container">
        <div class="registration-card">
            <h2>Registration Form</h2>
            <form action="https://td3013425.extforms.netsuite.com/app/site/crm/externalleadpage.nl?compid=TD3013425&formid=25&h=AAFdikaIXaX_eNuf6hPzP9wTZ-W_5v0LmUQrtdnX2ymnXMnsf6k" 
            method="post">
                <input type="text" name="companyname" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <input type="tel" name="phone" placeholder="Phone Number" required>
                <input type="checkbox" name="giveaccess" value="T" required checked style="display: none;">
                <input type="password" name="password" placeholder="Password" required>
                <input type="password" name="password2" placeholder="Confirm Password" required>
                <button type="submit">Register Now</button>
            </form>
        </div>
    </div>
</main>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->