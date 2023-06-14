import {
    ProjectsWrapper,
    ProjectsTitle,
    ProjectsSybTitle,
} from "./styled"
import { PreviewGallery } from "../previewGallery/previewGallery";
import { Button } from "../button/button";
import { projectsItems } from "../../assets/arrays";

export const RecentProjects = () => {



    return (
        <ProjectsWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '120px' }} >
            <ProjectsTitle>Наші роботи</ProjectsTitle>
            <ProjectsSybTitle>Завдяки Вам ми завжди в пошуках натхнення</ProjectsSybTitle>
            <PreviewGallery
                items={projectsItems}
            />
            <Button
                text='Показати більше'
                link='/galleries'
            />
        </ProjectsWrapper>
    )
};
