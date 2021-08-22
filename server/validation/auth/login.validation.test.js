const login_validation = require("./login.validation")
// @ponicode
describe("login_validation", () => {
    test("0", () => {
        let callFunction = () => {
            login_validation({ email: { email: "TestUpperCase@Example.com", password: ".Matrix53" }, password: { email: "TestUpperCase@Example.com", password: "!Lov3MyPianoPony" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login_validation({ email: { email: "something@example.com", password: "$p3onyycat" }, password: { email: "user@host:300", password: "!Lov3MyPianoPony" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login_validation({ email: { email: "something.example.com", password: ".Matrix53" }, password: { email: "TestUpperCase@Example.com", password: "$p3onyycat" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            login_validation({ email: { email: "TestUpperCase@Example.com", password: "!Lov3MyPianoPony" }, password: { email: "user1+user2@mycompany.com", password: "!Lov3MyPianoPony" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            login_validation({ email: { email: "TestUpperCase@Example.com", password: "!Lov3MyPianoPony" }, password: { email: "email@Google.com", password: "1Ki77y" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            login_validation(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
