/// <reference types="cypress" />

describe("test scenario", ()=>{

    it.only("sign in test case", ()=>{
        cy.visit("/login")

        //get (Sign in) word, using class
        cy.get(".text-xs-center.ng-binding")
        // cy.contains("h1","Sign in")
        //======================================== 
        //get (Need an account?) link, using contains
        cy.contains(`Need an account?`)
        // cy.get(".auth-page p a:last-child");
        //======================================== 
        //get email input, using name of elements and nth-child()
        cy.get("form fieldset fieldset:nth-child(2) input")
        //OR
        cy.get("input[type=email]");
        cy.get("[placeholder=Email]")
        //======================================== 
        //get password input, using name of elements and eq()
        cy.get("form fieldset fieldset:eq(2) input")
        //OR
        cy.get("input[type=password]");
        //======================================== 
        //get Sign in button, using contains
        cy.contains("button","Sign in")
        //OR
        cy.get("[type=submit]");
        cy.get("button[type=submit]")
    })

    it("Home page test case",()=>{
        cy.visit("/")

        //get conduit link, using class
        cy.get(".navbar-brand")
        //OR
        cy.contains("a","conduit")
        //===============================
        // get Home link, using get and filter
        cy.get(".navbar a+ul li a").filter(":contains(Home)")
        //OR
        cy.get(".navbar a+ul li:first-child a")
        cy.get(".navbar a").siblings().first().find("li a").first()
        cy.get(".navbar a").siblings().first().children().find("a").first()
        //===============================
        //get Sign up link, using contains
        cy.get(".navbar a+ul li a").filter(":contains(Sign up)")
        //OR
        cy.get(".navbar a+ul li:last-child a")
        cy.get(".navbar a").siblings().first().find("li a").last()
        cy.get(".navbar a").siblings().first().children().find("a").last()
        //===============================
        //get conduit word, using contains
        cy.contains("h1","conduit")
        //OR
        cy.get(".banner .logo-font")
        //===============================
        //get (A place to share your knowledge.) paragraph, using contains
        cy.contains("A place to share your knowledge.")
        //OR
        cy.get(".banner .logo-font + p")
        //===============================
        //get (Global Feed) link, using get and filter
        cy.get(".nav-pills li a").filter(":eq(1)")
        //OR
        cy.contains("Global Feed")
        //OR
        cy.get(".feed-toggle li:nth-child(2) a");
        //===============================
        //get (Popular Tags) paragraph, using get and find
        cy.get(".sidebar").find("p")
        cy.get(".sidebar p")
        //===============================
        //get (codebaseShow) link, using contains
        cy.contains("codebaseShow")
        //OR
        cy.get(".sidebar .tag-list").children().eq(3)
        cy.get(".sidebar .tag-list a").eq(3)
        cy.get(".sidebar .tag-list").find("a").eq(3);
        //===============================
        //get (deserunt) link, using contains
        cy.contains("deserunt")
        cy.get(".sidebar .tag-list a").filter(":last()")
        //OR
        cy.get(".sidebar .tag-list").find("a").last()
        cy.get(".sidebar .tag-list a").last();
        //OR
        cy.get(".sidebar .tag-list").children().eq(9)
        cy.get(".sidebar .tag-list a").eq(9)
        //===============================
        //get (favorite-btn) button, using get and filter
        cy.get("favorite-btn").filter(":first()")
        //===============================
        //get (Read more...) span, using get
        cy.get(".preview-link span").filter(":first()")
        //===============================
    })

    it("article page test case",()=>{
        cy.visit("article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863")
        
        //get h1, using get
        cy.get(".banner h1")
        // cy.get(".banner").find("h1")
        //===============================
        //get img link, using get
        cy.get(".banner .article-meta > a")
        //===============================
        //get (Anah Benešová) link, using get
        cy.get(".banner .info a")
        cy.get(".banner .article-meta > .info a")
        cy.get(".banner .article-meta > a + .info a")
        cy.get(".banner .date")
        //===============================
        //get (date) span, using get
        cy.get(".banner .info span")
        cy.get(".banner .article-meta > .info span")
        cy.get(".banner .article-meta > a + .info span")
        //===============================
        //get follow-btn button, using get
        cy.get(".banner follow-btn");
        cy.get(".banner .article-meta > ng-transclude follow-btn button")
        //===============================
        //get favorite-btn button , using get
        cy.get(".banner favorite-btn");
        cy.get(".banner .article-meta > ng-transclude favorite-btn button")
        //===============================
        //get p, using get
        cy.get(".article-content p")
        // cy.get(".article-content").find("p")
        //===============================
        //get li, using get and first
        cy.get(".tag-list li").first()
        // cy.get(".tag-list li").eq(0)
        // cy.get(".tag-list li:first-child");
        // cy.get(".tag-list li").filter(":first()")
        //===============================
        //get li, using get and last
        cy.get(".tag-list li").last()
        // cy.get(".tag-list li").eq(3)
        // cy.get(".tag-list li:last-child");
        // cy.get(".tag-list li").filter(":last()")
    })
})

