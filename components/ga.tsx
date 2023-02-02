export default function GA() {
    return (
        <>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-HFZG5ZDEH7"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-HFZG5ZDEH7');
                    `
            }}>
            </script>
        </>
    );
}
