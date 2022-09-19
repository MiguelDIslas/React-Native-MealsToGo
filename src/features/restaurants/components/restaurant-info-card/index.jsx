import { Component } from 'react';
import { SvgXml } from 'react-native-svg';
import { Spacer, Text } from '../../../../components';
import { star, open } from '../../../../../assets/svg';
import {
    Address, Icon, Info, Section, SectionEnd,
    Rating, RestaurantCard, RestaurantCardCover
} from './styles';

export default class RestaurantInfoCard extends Component {
    constructor({ restaurant }) {
        super();
        this.restaurant = restaurant;
    }

    render() {
        const { name, photos, address, rating, isOpenNow, isClosedTemporarily, icon } = this.restaurant;
        const ratingArray = Array.from(new Array(Math.floor(rating)));
        return (
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <Info>
                    <Text variant='label'>{name}</Text>
                    <Section>
                        <Rating>
                            {ratingArray.map((_, i) => (
                                <SvgXml key={`star-${i}`} xml={star} width={20} height={20} />
                            ))}
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <Text variant="error">
                                    CLOSED TEMPORARILY
                                </Text>
                            )}
                            <Spacer position="left" size="large">
                                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                            </Spacer>

                            <Spacer position="left" size="large">
                                <Icon source={{ url: icon }} />
                            </Spacer>

                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        )
    }
}
