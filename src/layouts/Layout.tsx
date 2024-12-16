import * as React from "react"
import Header from "../components/Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Header />
            {children}
        </div>
    )
}

export default Layout