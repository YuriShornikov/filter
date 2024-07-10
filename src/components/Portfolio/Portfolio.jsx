import { Component } from "react";
import { ProjectList } from "../ProjectList/ProjectList";
import { Toolbar } from "../Toolbar/Toolbar";

export class Portfolio extends Component {
    state = {
        selectedFilter: 'All',
        filters: ["All", "Websites", "Flayers", "Business Cards"],
        projects: [
            {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
              category: "Business Cards"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
              category: "Business Cards"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
              category: "Business Cards"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
              category: "Flayers"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
              category: "Business Cards"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
              category: "Business Cards"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
              category: "Websites"
            }, {
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
              category: "Flayers"
            }
        ],
    }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter });
    };

    filterProjects = () => {
        const { selectedFilter, projects } = this.state;
        if (selectedFilter === 'All') {
            return projects;
        }
        return projects.filter(project => project.category === selectedFilter);
    };

    render() {
        const { filters, selectedFilter } = this.state;
        const filteredProjects = this.filterProjects();
    
        return (
            <>
                <Toolbar
                    filters={filters}
                    selected={selectedFilter}
                    onSelectFilter={this.handleSelectFilter}
                />
                <ProjectList projects={filteredProjects} />
            </>
        );
    }

}