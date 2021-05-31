import { FunctionComponent } from "react"
import { Category } from "../../types"

export const NavItem:FunctionComponent<{ value : Category | 'Todos', hadlerFilterCategory:Function, active: string }> = ({ value, hadlerFilterCategory, active }) => {
    let classname = "capitalize cursor-pointer hover:text-green"
    if (active === value) classname += " text-green"
    return (
        <li className={classname} onClick={() => hadlerFilterCategory(value)}>
            {value}
        </li>
    )
}


const ProjectNavbar:FunctionComponent<{hadlerFilterCategory:Function, active: string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="Todos" {...props} />
            <NavItem value="React" {...props} />
            <NavItem value="Next.Js" {...props} />
            <NavItem value="Node" {...props} />
        </div>
    )
}

export default ProjectNavbar
