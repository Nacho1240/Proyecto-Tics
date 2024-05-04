import React from "react";
import { View, Text, StyleSheet } from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
    return (
    <view>
        {repositories.map(repo => (
            <view  key={repo.id}>
                <text>
                    {repo.id}
                </text>
                </view>



        ))}
        </view>



    )
}


export default RepositoryList;