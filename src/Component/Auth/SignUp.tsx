import SignUpForm from "./SignUpForm";


const SignUp = () => {
    return (
        <div>
             <div className="min-h-screen bg-slate-900 flex">
      {/* Left side - Futuristic background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/LoginImage.png')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
  
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <SignUpForm></SignUpForm>
      </div>
    </div>
            
        </div>
    );
};

export default SignUp;