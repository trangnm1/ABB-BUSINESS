import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private usernameInput = this.page.locator("//input[@placeholder='0912 345 678']");
    private passwordInput = this.page.locator("//input[@placeholder='Nhập mật khẩu']");
    private loginButton = this.page.locator("button[type='submit'] span");

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }

    async verifyLoginSuccess() {
        await this.verifyUrl("http://localhost:4200/home");

    }



    

}
