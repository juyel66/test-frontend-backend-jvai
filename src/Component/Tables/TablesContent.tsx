import TablesAuthor from "./TablesAuthor";
import TablesProjects from "./TablesProject";

const TablesContent = () => {
    return (
        <div>
           <div>
             <TablesAuthor></TablesAuthor>
           </div>
            <div className="mt-5">
                <TablesProjects></TablesProjects>
            </div>
            
        </div>
    );
};

export default TablesContent;