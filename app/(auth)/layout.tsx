const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className = "h-full"> 
            {children}
        </div>
     );
}
 
export default AuthLayout;