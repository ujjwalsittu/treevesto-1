import Document ,{Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>    
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/assets/tailwind/tailwind.min.css"/> 
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
                    <script src="/assets/bootstrap/js/bootstrap.js"></script> 

                </Head>
                <body className="bg-light">
                    <Main />
                    <NextScript />
                </body> 
            </Html>
        ) 
    }

}

export default MyDocument;