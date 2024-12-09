import { Button } from "../ui/button"
import { FaPlus } from 'react-icons/fa6'

const ContentHeader = () => {
    return (
        <div className="w-full bg-secondary text-secondary-foreground min-h-[60px] py-4 flex sm:items-center items-start gap-4 justify-between px-4 sm:px-12 flex-col sm:flex-row">
            <h1 className="text-xl uppercase font-semibold">
                Mostrador
            </h1>

            <Button variant="default">
                <FaPlus /> Nuevo pedido
            </Button>
        </div>
    )
}

export default ContentHeader