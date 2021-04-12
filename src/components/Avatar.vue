<template>
<div>


    <div class="card">
        <img class="card__image" src="../assets/logo.png" alt="" />
         <div class="avatar">
           <h3>
              {{avatarText}}
            </h3>
          </div>
        <div>
            <h3>Ahmad Shadeed</h3>
            <p>You: Thanks, sounds good! . 8hr</p>
            <img class="card__seen" src="../assets/logo.png" alt="" />
        </div>
    </div>
</div>
</template>

<script>
import { computed, defineComponent } from "vue";

 


export default defineComponent({
    name: "avatar",
    props:{
        firstName:{type: String, default: ''},
        lastName:{type: String, default: ''},
        image:{type: String, default:''}
    },
    setup(props) {

    
      const avatarText = computed(() =>{
          if(props.firstName != '' && props.lastName != '')
          {
            return `${props.firstName.substr(0,1).toUpperCase()}${props.lastName.substr(0,1).toUpperCase()}`;
          }
          else
            return '?';
      })


    return {
        avatarText,
    }

  }
})

</script>

<style scoped>
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
  background: #41B883;
  color: #35495E;
  border: 1px solid #35495E;
  position: relative;
  display: flex; /* [1] */
  align-items: center; /* [2] */
}

.avatar h3 {
  font-size: 15px;
}


.card {
  position: relative;
  display: flex; /* [1] */
  align-items: center; /* [2] */
  background-color: #fff;
  padding: 8px;
  border-radius: 7px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
}

.card h3 {
  font-size: 15px;
}

.card p {
  font-size: 13px;
  color: #65676b;
}

.card__image {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid #979797;
}

.card__seen {
  position: absolute; /* [3] */
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>