package gameRecommender;


import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class RecTest {

WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\chromedriver.exe");
		driver = (WebDriver) new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void testLinks() throws InterruptedException {
		System.out.println("Link Test");
		driver.get("file:///C:/Users/Admin/Documents/QACstuff/SoloProj/index.html");
		Thread.sleep(500);
		
		WebElement toLogin =  driver.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/a[2]"));
		toLogin.click();
		Thread.sleep(500);
		WebElement toRecommendations =  driver.findElement(By.xpath("//*[@id=\"headerCard\"]/div/nav/a[3]"));
		toRecommendations.click();
		Thread.sleep(500);
		WebElement toHome =  driver.findElement(By.xpath("//*[@id=\"headerCard\"]/div/nav/a[1]"));
		toHome.click();
		Thread.sleep(500);
	}
	
	@Test
	public void testLogin()  throws InterruptedException{
		System.out.println("Login Test");
		driver.get("file:///C:/Users/Admin/Documents/QACstuff/SoloProj/index.html");
		
		WebElement toLogin =  driver.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/a[2]"));
		toLogin.click();
		
		Thread.sleep(500);
		
		WebElement username = driver.findElement(By.xpath("/html/body/div[2]/main/div/form/div[1]/input"));
		username.sendKeys("consolegamer");
		WebElement password = driver.findElement(By.xpath("/html/body/div[2]/main/div/form/div[2]/input"));
		password.sendKeys("controller");
		WebElement submit =  driver.findElement(By.xpath("/html/body/div[2]/main/div/form/button"));
		submit.click();
		
		Thread.sleep(500);
		
		WebElement resultPage = driver.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/a[2]"));
		
		assertEquals("xyz", true, resultPage.getText().equals("My Profile"));
		
	}
	
	@Test
	public void loginAndGetRec() throws InterruptedException{
		System.out.println("Login and get recommendation");
		
		System.out.println("Login Test");
		driver.get("file:///C:/Users/Admin/Documents/QACstuff/SoloProj/index.html");
		
		WebElement toLogin =  driver.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/a[2]"));
		toLogin.click();
		
		Thread.sleep(500);
		
		WebElement username = driver.findElement(By.xpath("/html/body/div[2]/main/div/form/div[1]/input"));
		username.sendKeys("consolegamer");
		WebElement password = driver.findElement(By.xpath("/html/body/div[2]/main/div/form/div[2]/input"));
		password.sendKeys("controller");
		WebElement submit =  driver.findElement(By.xpath("/html/body/div[2]/main/div/form/button"));
		submit.click();
		
		Thread.sleep(500);
		
		WebElement recommendationsPage = driver.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/a[3]"));
		recommendationsPage.click();
		
		WebElement genre1 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[1]"));
		genre1.click();
		Thread.sleep(500);
		
		WebElement c1 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[1]/option[2]"));
		c1.click();
		Thread.sleep(500);
		
		WebElement genre2 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[2]"));
		genre2.click();
		
		WebElement c2 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[2]/option[3]"));
		c2.click();
		
		WebElement genre3 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[3]"));
		genre3.click();
		
		WebElement c3 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[1]/select[3]/option[4]"));
		c3.click();
		
		WebElement platform = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[2]/select[1]"));
		platform.click();
		
		WebElement c4 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[2]/select[1]/option[2]"));
		c4.click();
		
		WebElement gametype = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[2]/select[2]"));
		gametype.click();
		
		WebElement c5 = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/div/div[2]/select[2]/option[2]"));
		c5.click();
		
		
		
		WebElement recommend = driver.findElement(By.xpath("/html/body/div[2]/main/div[1]/div[2]/button"));
		recommend.click();
		
		Thread.sleep(1500);
		
		WebElement resultPage = driver.findElement(By.xpath("/html/body/div[2]/main/div[2]/div/div[1]"));
		assertEquals("xyz", true, resultPage.getText().equals("Witcher 3"));
	
		
		
	}

	

	
	@After
	public void teardown() {
		driver.close();
	}
}
