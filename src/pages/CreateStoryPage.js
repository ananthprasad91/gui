import React, { Component } from "react"
import PageLayout from "../common/PageLayout"
import CreateStory from "../components/CreateStory"

export default class WriteStoryPage extends Component {
    render() {
        return (
            <PageLayout>
                <div class="page-container no-pad">
                    <div class="main-content">
                        <div class="card">
                            <div class="card-body">
                                <h4>Write a New Story</h4>
                                <div class="m-t-25">
                                    <CreateStory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}