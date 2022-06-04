<template>
    <div class="single-blog d-flex flex-column justify-content-center align-items-center mb-5 py-2 px-3">
        <div class="imge">
            <img class="rounded" :src="img" alt=""/>
        </div>
        <div class="preview mt-2">
            <p>
                {{ preview }}
            </p>
        </div>

        <div class="more-details pb-2">
            <a :href="link">read more details</a>
        </div>

    </div>
</template>

<script>
export default{
    props:[
        'img',
        'preview',
        'link'
    ]

}
</script>


<style scoped lang='scss'>
.single-blog{
    color: var(--light);
    border-right:2px solid var(--primary-alt);
    border-bottom:2px solid var(--primary-alt);
    width: 100%;
    cursor: pointer;
    .imge{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            transition: .2s ease-out;
        }

        &:hover{
            img{
                transform: scale(1.1);
            }
        }
    }

    .more-details{
        a{
            text-decoration: none;
            color: var(--gray);
            transition: .2s ease-out;
        }
        &:hover{
            a{
                color: var(--primary);
            }
        }
    }

    
}
</style>