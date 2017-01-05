package <%= appPackage %>.<%= packageName %>;

import com.joxad.easydatabinding.activity.ActivityBase;
import <%= appPackage %>.R;
import <%= appPackage %>.BR;
import <%= appPackage %>.databinding.<%= name %>Binding;
import android.os.Bundle;
/**
 * Generated by generator-android-template
 */
public class <%= name %> extends ActivityBase<<%= name %>Binding, <%= name %>VM> {
    @Override
    public int data() {
        return BR.<%= BR %>VM;
    }

    @Override
    public int layoutResources() {
        return R.layout.<%= layoutName %>;
    }

    @Override
    public <%= name %>VM baseActivityVM(<%= name %>Binding binding, Bundle savedInstanceState) {
        return new <%= name %>VM(this, binding);
    }
}