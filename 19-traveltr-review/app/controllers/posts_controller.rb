class PostsController < ApplicationController
    def new
        @post = Post.new
    end
    
    def show
        @post = Post.find(params[:id])
    end


    def create
        @post = Post.new(post_params)

        if @post.valid?
            @post.save
            redirect_to post_path(@post)
        else
            redirect_to new_post_path, notice: @post.errors.full_messages
        end
    end

    def edit
        @post = Post.find(params[:id])
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            # @post.save
            redirect_to post_path(@post)
        else
            redirect_to edit_post_path, notice: @post.errors.full_messages
        end
    end

    def like
        post = Post.find(params[:id])
        post.likes += 1
        post.save
        redirect_to post_path(post)
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
      end
end