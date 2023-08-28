import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
   <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16
    md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p className="my-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.

            </p>
            <p>
                © Evogym All Rights Reserved
            </p>
        </div>
        <div className="t-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">aa masdfas</p>
            <p className="my-5">aa masdfas</p>
            <p>Ullamcorper ivamus</p>
       </div>
        <div>
        <h4 className="font-bold">Links</h4>
            <p className="my-5">aa masdfas</p>
            <p className="my-5">aa masdfas</p>
            <p>Ullamcorper ivamus</p>

        </div>


    </div>

   </footer>
  )
}

export default Footer