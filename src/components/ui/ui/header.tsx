import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";

const Header = () => {

    return <Card className="flex items-center justify-between p-[30px]">
        <Button size="icon" variant="outline">
            <MenuIcon/>
        </Button>

        <h1 className="font-semibold text-lg"><span className="text-primary">NOME</span> Store</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon/>
        </Button>
        
    </Card>
}
export default Header;