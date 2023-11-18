/// <reference types="cypress" />

describe("test scenario", ()=>{

    // it("sign in test case", ()=>{
    //     cy.visit("/login")

    //     //get (Sign in) word, using class
    //     cy.get(".text-xs-center.ng-binding")
    //     //======================================== 
    //     //get (Need an account?) link, using contains
    //     cy.contains(`Need an account?`)
    //     //======================================== 
    //     //get email input, using name of elements and nth-child()
    //     cy.get("form fieldset fieldset:nth-child(2) input")
    //     //======================================== 
    //     //get password input, using name of elements and eq()
    //     cy.get("form fieldset fieldset:eq(2) input")
    //     //======================================== 
    //     //get Sign in button, using contains
    //     cy.contains("button","Sign in")
    // })

    // it("Home page test case",()=>{
    //     cy.visit("/")

    //     //get conduit link, using class
    //     cy.get(".navbar-brand")
    //     //===============================
    //     // get Home link, using get and filter
    //     cy.get("li a").filter(":contains(Home)")
    //     //===============================
    //     //get Sign up link, using contains
    //     cy.get("li a").filter(":contains(Sign up)")
    //     //===============================
    //     //get conduit word, using contains
    //     cy.contains("h1","conduit")
    //     //===============================
    //     //get (A place to share your knowledge.) paragraph, using contains
    //     cy.contains("A place to share your knowledge.")
    //     //===============================
    //     //get (Global Feed) link, using get and filter
    //     cy.get(".nav-pills li a").filter(":eq(1)")
    //     //===============================
    //     //get (Popular Tags) paragraph, using get and find
    //     cy.get(".sidebar").find("p")
    //     //===============================
    //     //get (codebaseShow) link, using contains
    //     cy.contains("codebaseShow")
    //     //===============================
    //     //get (deserunt) link, using contains
    //     cy.contains("deserunt")
    //     // cy.get(".sidebar .tag-list a").filter(":last()")
    //     // cy.get(".sidebar .tag-list").find("a").last()
    //     //===============================
    //     //get (favorite-btn) button, using get and filter
    //     cy.get("favorite-btn").filter(":first()")
    //     //===============================
    //     //get (Read more...) span, using get
    //     cy.get(".preview-link span").filter(":first()")
    //     //===============================
    // })

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
        cy.get(".banner .article-meta > .info a")
        //===============================
        //get (date) span, using get
        cy.get(".banner .article-meta > .info span")
        //===============================
        //get follow-btn button, using get
        cy.get(".banner .article-meta > ng-transclude follow-btn button")
        //===============================
        //get favorite-btn button , using get
        cy.get(".banner .article-meta > ng-transclude favorite-btn button")
        //===============================
        //get p, using get
        cy.get(".article-content p")
        // cy.get(".article-content").find("p")
        //===============================
        //get li, using get and first
        cy.get(".tag-list li").first()
        // cy.get(".tag-list li").filter(":first()")
        //===============================
        //get li, using get and last
        cy.get(".tag-list li").last()
        // cy.get(".tag-list li").filter(":last()")
    })
})

