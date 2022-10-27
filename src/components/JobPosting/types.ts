import type * as Stitches from '@stitches/react';

// Place all features here that you want to disable by props
export type JobPostingDisableFeaturesType = {
    disableFavorite?: boolean;
};

// Place props that you want to pass to the component here
export type JobPostingPropsType = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
} & JobPostingDisableFeaturesType;

// Base component props
export type JobPostingBaseType = {
    onDetailsClick?: () => void;
    viewCount?: number;
}

// Favorite component props
export type JobPostingFavoriteType = JobPostingPropsType & {
    favoriteDom: JSX.Element;
}

// Like component props
export type JobPostingLikeType = JobPostingPropsType & {
    isLike: boolean;
}

// Render props (Place all type/props that you pass to the renderer here)
export type JobPostingRenderType = JobPostingPropsType & JobPostingBaseType & JobPostingFavoriteType & JobPostingLikeType;
