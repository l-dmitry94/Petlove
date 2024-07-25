import { FC } from 'react';
import {
    cat_desk_1x,
    cat_desk_2x,
    cat_mob_1x,
    cat_mob_2x,
    cat_tab_1x,
    cat_tab_2x,
    dog_desk_1x,
    dog_desk_2x,
    dog_mob_1x,
    dog_mob_2x,
    dog_tab_1x,
    dog_tab_2x,
} from 'assets/images/auth-pets';
import { cat_1x, cat_2x, dog_1x, dog_2x } from 'assets/images';
import { useMedia } from 'hooks/useMedia';
import { IAuthImage, Pet } from './AuthImage.types';
import scss from './AuthImage.module.scss';

const AuthImage: FC<IAuthImage> = ({ pet }) => {
    const { isMobile } = useMedia();
    return (
        <div className={scss.imageWrapper}>
            <picture>
                <source
                    media="(min-width: 1280px)"
                    srcSet={
                        pet === Pet.Cat
                            ? `${cat_desk_1x} 1x, ${cat_desk_2x} 2x`
                            : `${dog_desk_1x} 1x, ${dog_desk_2x} 2x`
                    }
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={
                        pet === Pet.Cat
                            ? `${cat_tab_1x} 1x, ${cat_tab_2x} 2x`
                            : `${dog_tab_1x} 1x, ${dog_tab_2x} 2x`
                    }
                />
                <img
                    src={pet === Pet.Cat ? cat_mob_1x : dog_mob_1x}
                    srcSet={
                        pet === Pet.Cat
                            ? `${cat_mob_1x} 1x, ${cat_mob_2x} 2x`
                            : `${dog_mob_1x} 1x, ${dog_mob_2x} 2x`
                    }
                    alt="Auth image"
                    loading="lazy"
                    className={scss.image}
                />
            </picture>

            {!isMobile && (
                <div className={scss.petInfoWrapper}>
                    <div className={scss.petImageWrapper}>
                        <img
                            src={pet === Pet.Cat ? cat_1x : dog_1x}
                            srcSet={
                                pet === Pet.Cat
                                    ? `${cat_1x} 1x, ${cat_2x} 2x`
                                    : `${dog_1x} 1x, ${dog_2x} 2x`
                            }
                            alt={pet === Pet.Cat ? 'Jack' : 'Rich'}
                        />
                    </div>
                    <div className={scss.petInfo}>
                        <div className={scss.petInfoHeader}>
                            <h4 className={scss.petName}>
                                {pet === Pet.Cat ? 'Jack' : 'Rich'}
                            </h4>
                            <p className={scss.petBirthday}>
                                <span className={scss.petBirthdayTitle}>
                                    Birthday:
                                </span>
                                {pet === Pet.Cat ? '18.10.2021' : '21.09.2020'}
                            </p>
                        </div>
                        <p className={scss.petDescription}>
                            {pet === Pet.Cat
                                ? 'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys  playing with toys.'
                                : 'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthImage;
