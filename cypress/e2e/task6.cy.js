/// <reference types="cypress" />

describe("",()=>{

    before(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.login()
        cy.wait(1500)

        cy.get("#nopSideBarPusher").click()
        cy.get(".nav-sidebar > li:eq(1) > a").click()
        cy.contains("Products").click()

        //Add new product
        for(let i=0; i<2; i++){
            cy.contains("Add new").click()
            cy.get("#Name").clear().type("AseelLaptop"+i)
            cy.get("#product-price").scrollIntoView()
            cy.get("#product-price-area input").last().clear({force:true}).type(3000,{force:true})
            cy.get("[name=save]").click()
        }
    })

    //المفروض أكتب تيست كيس وحدة للبحث و الحذف, و فنكشن الإضافة بضيفه مع نفس التيست كيس, يعني ما أفصلهم
    // it("Verify that the user can add new product",()=>{
    //     cy.get("#nopSideBarPusher").click()
    //     cy.get(".nav-sidebar > li:eq(1) > a").click()
    //     cy.contains("Products").click()

    //     cy.wait(1500)

    //     cy.addProduct()
    // })

    it("Verify that the user can search and delete products",()=>{
        //Search for a product
        cy.get("#nopSideBarPusher").click();
        cy.contains("Products").click();
        cy.get("#SearchProductName").clear().type("AseelLaptop")
        cy.get("#search-products").click()
        cy.wait(1500)

        // cy.get(".dataTables_scrollHead input").check()// Check all checkboxes
        //OR
        // Check all checkboxes one by one in rows
        cy.get("#products-grid tbody").find("tr").then((rows)=>{
            console.log(rows.length) ; // 2
            for(let i=0;i<rows.length;i++){
                cy.get(rows[i]).find("[name=checkbox_products]").check()
            }
        });

        cy.get("#delete-selected").click()
        cy.wait(1500)
        cy.get("#delete-selected-action-confirmation-submit-button").click()

        cy.get("#products-grid").find("tr td").should("have.class","dataTables_empty").and("contain","No data available in table")

        cy.reload()

        cy.get("#SearchProductName").clear().type("AseelLaptop")
        cy.get("#search-products").click()
        cy.wait(1500)
        cy.get("#products-grid tbody tr td").should("have.class","dataTables_empty").and("contain","No data available in table")
    })
})



