import React from "react"
import App from "./App.js"
import { render } from "@testing-library/react"

test("button should be with caption Submit", () => {
    const { getByTestId } = render(<App />)
    const submitBtn = getByTestId("submit-btn")

    expect(submitBtn.value).toBe("Submit")
})
